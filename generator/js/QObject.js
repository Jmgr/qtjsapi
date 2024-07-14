
// auto generated
//var self;

// class constructor:
function QObject() {


    // should be QObject_BaseJs.call(this, engine):
    //QObject.prototype = new QObject_BaseJs(engine);

    var wrapper;

    // creating JS class for existing wrapper:
    if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

        if (arguments[2]!==undefined
                           && (arguments[2]===null ||
                                              (typeof(arguments[2].getWrappedType)==="function" &&
                                                      arguments[2].getWrappedType()===RJSType_QObject.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
                //wrapper.__WRAPPER__ = true;
                Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
            // only copy properties if this is not an existing wrapper:
            copyProperties(this, wrapper, QObject);
            //}
        } else {
            qWarning("QObject.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
        }

    } else {

        if (arguments.length >= 0 &&
                arguments.length <= 1) {

            self = this;
            wrapper = new QObject_Wrapper(
                // RJSApi:
                handler
                , arguments[0]
                ////this.setWrapper(this.wrapper);
                //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });


            copyProperties(this, wrapper, QObject);

            //this.setWrapper(this.wrapper);



            //copyProperties(this, wrapper, QObject);
        }


        else {

            print("QObject(): wrong number / type of arguments");

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

//QObject.prototype = new QObject_BaseJs(engine);
//QObject.prototype = new QObject_Wrapper(engine);
QObject.prototype = new Object();

QObject.prototype.toString = function() {
    //return "QObject [JS] [0x" + this.getAddress().toString(16) + "]";
    return "QObject [JS]";
};
QObject.getObjectType = function() {
    return RJSType_QObject.getIdStatic();
};

QObject.prototype.getObjectType = function() {
    return RJSType_QObject.getIdStatic();
};

QObject.prototype.isOfObjectType = function(t) {
    if (t===RJSType_QObject.getIdStatic()) {
        return true;
    }



    return false;



};

// enum values:


// functions:


// static functions:


// static function
QObject.tr = function()

{
    //print("JS: QObject.tr");

    if (arguments.length >= 1 &&
            arguments.length <= 3) {

        // calling static wrapper:
        return QObject_WrapperSingletonInstance.tr(
                   arguments[0], arguments[1], arguments[2]
               );


        //copyProperties(this, wrapper, QObject);
    }


    else {

        print("QObject.tr(): wrong number / type of arguments");

        console.trace();
    }

};


// constants:


// public static properties without access function:


// copy function:
//QObject.prototype.copy = function() {
//  return this.wrapper.copy();
//};

// destroy function:
//QObject.prototype.destr = function() {
//  return this.wrapper.destr();
//};
