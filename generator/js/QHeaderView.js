
      // auto generated
      //var self;

      // class constructor:
      function QHeaderView() {
        

        // should be QHeaderView_BaseJs.call(this, engine):
        //QHeaderView.prototype = new QHeaderView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QHeaderView.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QHeaderView);
            //}
          }
          else {
            qWarning("QHeaderView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHeaderView_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QHeaderView);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView(): wrong number / type of arguments");
      
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
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["sectionMoved(int,int,int)"] = Object.getPrototypeOf(this).sectionMoved;
  
    this["sectionResized(int,int,int)"] = Object.getPrototypeOf(this).sectionResized;
  
    this["sectionPressed(int)"] = Object.getPrototypeOf(this).sectionPressed;
  
    this["sectionClicked(int)"] = Object.getPrototypeOf(this).sectionClicked;
  
    this["sectionEntered(int)"] = Object.getPrototypeOf(this).sectionEntered;
  
    this["sectionDoubleClicked(int)"] = Object.getPrototypeOf(this).sectionDoubleClicked;
  
    this["sectionCountChanged(int,int)"] = Object.getPrototypeOf(this).sectionCountChanged;
  
    this["sectionHandleDoubleClicked(int)"] = Object.getPrototypeOf(this).sectionHandleDoubleClicked;
  
    this["sortIndicatorChanged(int,Qt::SortOrder)"] = Object.getPrototypeOf(this).sortIndicatorChanged;
  
    this["sortIndicatorClearableChanged(bool)"] = Object.getPrototypeOf(this).sortIndicatorClearableChanged;
  
          }
        }
      }

      //QHeaderView.prototype = new QHeaderView_BaseJs(engine);
      //QHeaderView.prototype = new QHeaderView_Wrapper(engine);
      QHeaderView.prototype = new Object();

      QHeaderView.prototype.toString = function() {
          //return "QHeaderView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHeaderView [JS]";
        };
      QHeaderView.getObjectType = function() {
        
            return RJSType_QHeaderView.getIdStatic();
          
      };

      QHeaderView.prototype.getObjectType = function() {
        
            return RJSType_QHeaderView.getIdStatic();
          
      };

      QHeaderView.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QHeaderView.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
QHeaderView.AdjustIgnored = QHeaderView_Wrapper.AdjustIgnored;
QHeaderView.AdjustToContentsOnFirstShow = QHeaderView_Wrapper.AdjustToContentsOnFirstShow;
QHeaderView.AdjustToContents = QHeaderView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QHeaderView.NoSelection = QHeaderView_Wrapper.NoSelection;
QHeaderView.SingleSelection = QHeaderView_Wrapper.SingleSelection;
QHeaderView.MultiSelection = QHeaderView_Wrapper.MultiSelection;
QHeaderView.ExtendedSelection = QHeaderView_Wrapper.ExtendedSelection;
QHeaderView.ContiguousSelection = QHeaderView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QHeaderView.SelectItems = QHeaderView_Wrapper.SelectItems;
QHeaderView.SelectRows = QHeaderView_Wrapper.SelectRows;
QHeaderView.SelectColumns = QHeaderView_Wrapper.SelectColumns;

  // enum: ScrollHint
QHeaderView.EnsureVisible = QHeaderView_Wrapper.EnsureVisible;
QHeaderView.PositionAtTop = QHeaderView_Wrapper.PositionAtTop;
QHeaderView.PositionAtBottom = QHeaderView_Wrapper.PositionAtBottom;
QHeaderView.PositionAtCenter = QHeaderView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QHeaderView.NoEditTriggers = QHeaderView_Wrapper.NoEditTriggers;
QHeaderView.CurrentChanged = QHeaderView_Wrapper.CurrentChanged;
QHeaderView.DoubleClicked = QHeaderView_Wrapper.DoubleClicked;
QHeaderView.SelectedClicked = QHeaderView_Wrapper.SelectedClicked;
QHeaderView.EditKeyPressed = QHeaderView_Wrapper.EditKeyPressed;
QHeaderView.AnyKeyPressed = QHeaderView_Wrapper.AnyKeyPressed;
QHeaderView.AllEditTriggers = QHeaderView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QHeaderView.ScrollPerItem = QHeaderView_Wrapper.ScrollPerItem;
QHeaderView.ScrollPerPixel = QHeaderView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QHeaderView.NoDragDrop = QHeaderView_Wrapper.NoDragDrop;
QHeaderView.DragOnly = QHeaderView_Wrapper.DragOnly;
QHeaderView.DropOnly = QHeaderView_Wrapper.DropOnly;
QHeaderView.DragDrop = QHeaderView_Wrapper.DragDrop;
QHeaderView.InternalMove = QHeaderView_Wrapper.InternalMove;

  // enum: ResizeMode
QHeaderView.Interactive = QHeaderView_Wrapper.Interactive;
QHeaderView.Stretch = QHeaderView_Wrapper.Stretch;
QHeaderView.Fixed = QHeaderView_Wrapper.Fixed;
QHeaderView.ResizeToContents = QHeaderView_Wrapper.ResizeToContents;
QHeaderView.Custom = QHeaderView_Wrapper.Custom;


      // functions:
      
        // function 
        QHeaderView.prototype.actionEvent = function() 
          
        {
          //print("JS: QHeaderView.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QHeaderView.tr = function() 
          
        {
          //print("JS: QHeaderView.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QHeaderView_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHeaderView.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QHeaderView.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QHeaderView_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHeaderView.setTabOrder = function() 
          
        {
          //print("JS: QHeaderView.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QHeaderView_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHeaderView.mouseGrabber = function() 
          
        {
          //print("JS: QHeaderView.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QHeaderView_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHeaderView.keyboardGrabber = function() 
          
        {
          //print("JS: QHeaderView.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QHeaderView_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHeaderView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHeaderView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    