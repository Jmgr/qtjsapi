
      // auto generated
      //var self;

      // class constructor:
      function QXmlInputSource() {
        

        // should be QXmlInputSource_BaseJs.call(this, engine):
        //QXmlInputSource.prototype = new QXmlInputSource_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QXmlInputSource.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlInputSource);
            //}
          }
          else {
            qWarning("QXmlInputSource.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlInputSource_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlInputSource);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlInputSource);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlInputSource_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlInputSource);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlInputSource);
  }

  
  else {
    
        print("QXmlInputSource(): wrong number / type of arguments");
      
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

      //QXmlInputSource.prototype = new QXmlInputSource_BaseJs(engine);
      //QXmlInputSource.prototype = new QXmlInputSource_Wrapper(engine);
      QXmlInputSource.prototype = new Object();

      QXmlInputSource.prototype.toString = function() {
          //return "QXmlInputSource [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlInputSource [JS]";
        };
      QXmlInputSource.getObjectType = function() {
        
            return RJSType_QXmlInputSource.getIdStatic();
          
      };

      QXmlInputSource.prototype.getObjectType = function() {
        
            return RJSType_QXmlInputSource.getIdStatic();
          
      };

      QXmlInputSource.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QXmlInputSource.getIdStatic()) {
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
      //QXmlInputSource.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlInputSource.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    