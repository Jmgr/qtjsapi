
      // auto generated
      //var self;

      // class constructor:
      function QDomNodeList() {
        

        // should be QDomNodeList_BaseJs.call(this, engine):
        //QDomNodeList.prototype = new QDomNodeList_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDomNodeList_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomNodeList);
            //}
          }
          else {
            qWarning("QDomNodeList.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNodeList_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNodeList);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNodeList);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNodeList_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNodeList);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNodeList);
  }

  
  else {
    
        print("QDomNodeList(): wrong number / type of arguments");
      
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

      //QDomNodeList.prototype = new QDomNodeList_BaseJs(engine);
      //QDomNodeList.prototype = new QDomNodeList_Wrapper(engine);
      QDomNodeList.prototype = new Object();

      QDomNodeList.prototype.toString = function() {
          //return "QDomNodeList [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNodeList [JS]";
        };
      QDomNodeList.getObjectType = function() {
        
            return RJSType.QDomNodeList_Type;
          
      };

      QDomNodeList.prototype.getObjectType = function() {
        
            return RJSType.QDomNodeList_Type;
          
      };

      QDomNodeList.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomNodeList_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomNodeList_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNodeList.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNodeList.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    