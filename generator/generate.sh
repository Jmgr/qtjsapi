#!/bin/bash

echo "Generating script bindings..."

echo "Sorting sources..."

DIR=`dirname $0`
echo $DIR

PLUGINID=$1
TYPEIDBASE=$2

sh $DIR/sort_sources.sh

echo "Generating helpers..."
sh $DIR/xml2type.sh

echo "xml2sorted..."
sh $DIR/xml2sorted.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2all..."
sh $DIR/xml2all.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2helper (relies on xmlall)..."
sh $DIR/xml2helper.sh $PLUGINID $TYPEIDBASE

echo "xml2merged..."
sh $DIR/xml2merged.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2unique..."
sh $DIR/xml2unique.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2addcount..."
sh $DIR/xml2addcount.sh
if [ $? -ne 0 ]; then exit $?; fi

sh $DIR/xml2cpp.sh $PLUGINID $TYPEIDBASE
if [ $? -ne 0 ]; then exit $?; fi

sh $DIR/xml2cppbase.sh $PLUGINID $TYPEIDBASE
if [ $? -ne 0 ]; then exit $?; fi

sh $DIR/xml2js.sh $PLUGINID $TYPEIDBASE
if [ $? -ne 0 ]; then exit $?; fi

find cpp -size 0 | xargs rm

wait

if [ ! -d templates ]
then
    exit
fi

echo "// Automatically generated, do not edit" > new_header_cpp.h
cat templates/header_cpp_header.h >> new_header_cpp.h
for f in cpp/*.h
do
    echo "#include \"generator/$f\"" >> new_header_cpp.h
done
cat templates/header_cpp_footer.h >> new_header_cpp.h

diff new_header_cpp.h header_cpp.h
if [ $? -ne 0 ]
then
    mv new_header_cpp.h header_cpp.h
else
    rm new_header_cpp.h
fi

sh $DIR/generate_CMakeInclude.sh

wait
cd ..
sh update_qrc.sh

echo "done"