
// auto generated
//var self;

// class constructor:
function QFontMetricsF() {


    // should be QFontMetricsF_BaseJs.call(this, engine):
    //QFontMetricsF.prototype = new QFontMetricsF_BaseJs(engine);

    var wrapper;

    // creating JS class for existing wrapper:
    if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

        if (arguments[2]!==undefined
                           && (arguments[2]===null ||
                                              (typeof(arguments[2].getWrappedType)==="function" &&
                                                      arguments[2].getWrappedType()===RJSType_QFontMetricsF.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
                //wrapper.__WRAPPER__ = true;
                Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
            // only copy properties if this is not an existing wrapper:
            copyProperties(this, wrapper, QFontMetricsF);
            //}
        } else {
            qWarning("QFontMetricsF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
        }

    } else {

        if (arguments.length == 2) {

            self = this;
            wrapper = new QFontMetricsF_Wrapper(
                // RJSApi:
                handler
                , arguments[0], arguments[1]
                ////this.setWrapper(this.wrapper);
                //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });


            copyProperties(this, wrapper, QFontMetricsF);

            //this.setWrapper(this.wrapper);



            //copyProperties(this, wrapper, QFontMetricsF);
        }


        else

            if (arguments.length == 1) {

                self = this;
                wrapper = new QFontMetricsF_Wrapper(
                    // RJSApi:
                    handler
                    , arguments[0]
                    ////this.setWrapper(this.wrapper);
                    //Object.setPrototypeOf(this, wrapper);
                );
                //wrapper.__WRAPPER__ = true;
                Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });


                copyProperties(this, wrapper, QFontMetricsF);

                //this.setWrapper(this.wrapper);



                //copyProperties(this, wrapper, QFontMetricsF);
            }


            else

                if (arguments.length == 1) {

                    self = this;
                    wrapper = new QFontMetricsF_Wrapper(
                        // RJSApi:
                        handler
                        , arguments[0]
                        ////this.setWrapper(this.wrapper);
                        //Object.setPrototypeOf(this, wrapper);
                    );
                    //wrapper.__WRAPPER__ = true;
                    Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });


                    copyProperties(this, wrapper, QFontMetricsF);

                    //this.setWrapper(this.wrapper);



                    //copyProperties(this, wrapper, QFontMetricsF);
                }


                else

                    if (arguments.length == 1) {

                        self = this;
                        wrapper = new QFontMetricsF_Wrapper(
                            // RJSApi:
                            handler
                            , arguments[0]
                            ////this.setWrapper(this.wrapper);
                            //Object.setPrototypeOf(this, wrapper);
                        );
                        //wrapper.__WRAPPER__ = true;
                        Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });


                        copyProperties(this, wrapper, QFontMetricsF);

                        //this.setWrapper(this.wrapper);



                        //copyProperties(this, wrapper, QFontMetricsF);
                    }


                    else {

                        print("QFontMetricsF(): wrong number / type of arguments");

                        console.trace();
                    }

    }

    //self = this;
    //if (typeof(this.wrapper)!=="undefined") {
    //  this.wrapper.setEngine(engine);
    //}


    if (typeof(wrapper)!=="undefined") {
        //var localSelf = this;
        //print("QAction self:", localSelf);
        // TODO:
        //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });


        // signal aliases:
        if (Object.getPrototypeOf(this)!=null) {

        }
    }
}

//QFontMetricsF.prototype = new QFontMetricsF_BaseJs(engine);
//QFontMetricsF.prototype = new QFontMetricsF_Wrapper(engine);
QFontMetricsF.prototype = new Object();

QFontMetricsF.prototype.toString = function() {
    //return "QFontMetricsF [JS] [0x" + this.getAddress().toString(16) + "]";
    return "QFontMetricsF [JS]";
};
QFontMetricsF.getObjectType = function() {
    return RJSType_QFontMetricsF.getIdStatic();
};

QFontMetricsF.prototype.getObjectType = function() {
    return RJSType_QFontMetricsF.getIdStatic();
};

QFontMetricsF.prototype.isOfObjectType = function(t) {
    if (t===RJSType_QFontMetricsF.getIdStatic()) {
        return true;
    }



    return false;



};

// enum values:


// functions:


// static functions:


// constants:


// public static properties without access function:


// copy function:
//QFontMetricsF.prototype.copy = function() {
//  return this.wrapper.copy();
//};

// destroy function:
//QFontMetricsF.prototype.destr = function() {
//  return this.wrapper.destr();
//};
