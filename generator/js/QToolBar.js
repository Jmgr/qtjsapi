
      // auto generated
      //var self;

      // class constructor:
      function QToolBar() {
        

        // should be QToolBar_BaseJs.call(this, engine):
        //QToolBar.prototype = new QToolBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QToolBar_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QToolBar);
            //}
          }
          else {
            qWarning("QToolBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QToolBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QToolBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QToolBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QToolBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar(): wrong number / type of arguments");
      
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
  
    this["actionTriggered(QAction*)"] = Object.getPrototypeOf(this).actionTriggered;
  
    this["movableChanged(bool)"] = Object.getPrototypeOf(this).movableChanged;
  
    this["allowedAreasChanged(Qt::ToolBarAreas)"] = Object.getPrototypeOf(this).allowedAreasChanged;
  
    this["orientationChanged(Qt::Orientation)"] = Object.getPrototypeOf(this).orientationChanged;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["toolButtonStyleChanged(Qt::ToolButtonStyle)"] = Object.getPrototypeOf(this).toolButtonStyleChanged;
  
    this["topLevelChanged(bool)"] = Object.getPrototypeOf(this).topLevelChanged;
  
    this["visibilityChanged(bool)"] = Object.getPrototypeOf(this).visibilityChanged;
  
          }
        }
      }

      //QToolBar.prototype = new QToolBar_BaseJs(engine);
      //QToolBar.prototype = new QToolBar_Wrapper(engine);
      QToolBar.prototype = new Object();

      QToolBar.prototype.toString = function() {
          //return "QToolBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QToolBar [JS]";
        };
      QToolBar.getObjectType = function() {
        
            return RJSType.QToolBar_Type;
          
      };

      QToolBar.prototype.getObjectType = function() {
        
            return RJSType.QToolBar_Type;
          
      };

      QToolBar.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QToolBar_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QToolBar_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QToolBar.prototype.actionEvent = function() 
          
        {
          //print("JS: QToolBar.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QToolBar.tr = function() 
          
        {
          //print("JS: QToolBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QToolBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolBar.setTabOrder = function() 
          
        {
          //print("JS: QToolBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QToolBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolBar.mouseGrabber = function() 
          
        {
          //print("JS: QToolBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolBar.keyboardGrabber = function() 
          
        {
          //print("JS: QToolBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QToolBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QToolBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    