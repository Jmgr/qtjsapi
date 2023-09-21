
      // auto generated
      //var self;

      // class constructor:
      function QRadioButton() {
        

        // should be QRadioButton_BaseJs.call(this, engine):
        //QRadioButton.prototype = new QRadioButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QRadioButton_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QRadioButton);
            //}
          }
          else {
            qWarning("QRadioButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRadioButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadioButton);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QRadioButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadioButton);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton(): wrong number / type of arguments");
      
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
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["clicked(bool)"] = Object.getPrototypeOf(this).clicked;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
          }
        }
      }

      //QRadioButton.prototype = new QRadioButton_BaseJs(engine);
      //QRadioButton.prototype = new QRadioButton_Wrapper(engine);
      QRadioButton.prototype = new Object();

      QRadioButton.prototype.toString = function() {
          //return "QRadioButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRadioButton [JS]";
        };
      QRadioButton.getObjectType = function() {
        
            return RJSType.QRadioButton_Type;
          
      };

      QRadioButton.prototype.getObjectType = function() {
        
            return RJSType.QRadioButton_Type;
          
      };

      QRadioButton.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QRadioButton_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QAbstractButton_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QRadioButton_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QAbstractButton_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QRadioButton.prototype.actionEvent = function() 
          
        {
          //print("JS: QRadioButton.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QRadioButton.tr = function() 
          
        {
          //print("JS: QRadioButton.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QRadioButton_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QRadioButton.setTabOrder = function() 
          
        {
          //print("JS: QRadioButton.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QRadioButton_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QRadioButton.mouseGrabber = function() 
          
        {
          //print("JS: QRadioButton.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QRadioButton_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QRadioButton.keyboardGrabber = function() 
          
        {
          //print("JS: QRadioButton.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QRadioButton_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRadioButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRadioButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    