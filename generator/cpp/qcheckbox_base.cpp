

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qcheckbox_base.h"
  //#include "qcheckbox_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QCheckBox

    // constructors:
    
  // Class: QCheckBox
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

  // Class: QCheckBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2

      // protected overwritten functions / events and their public invokable counterparts:
      void QCheckBox_Base::mousePressEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QCheckBox_Base::mousePressEvent()";

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mousePressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::mousePressEvent(
          event
        );
      }
    }

  void QCheckBox_Base::mouseReleaseEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QCheckBox_Base::mouseReleaseEvent()";

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseReleaseEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::mouseReleaseEvent(
          event
        );
      }
    }

  void QCheckBox_Base::resizeEvent(
      QResizeEvent* event
    ) {

      //qDebug() << "QCheckBox_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QResizeEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.resizeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::resizeEvent(
          event
        );
      }
    }

  void QCheckBox_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QCheckBox_Base::actionEvent()";

      //QJSValue f = self.prototype().property("actionEvent");
      QJSValue f = self.property("actionEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QActionEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.actionEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::actionEvent(
          event
        );
      }
    }

  void QCheckBox_Base::paintEvent(
      QPaintEvent* a1
    ) {

      //qDebug() << "QCheckBox_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPaintEvent(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.paintEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::paintEvent(
          a1
        );
      }
    }

  void QCheckBox_Base::mouseMoveEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QCheckBox_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseMoveEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QCheckBox::mouseMoveEvent(
          a1
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      