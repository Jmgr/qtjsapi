

// Auto generated
// Adds public versions for event handlers to be called from
// JS implementation of these event handlers.

// include header:
#include "qdockwidget_base.h"
//#include "qdockwidget_wrapper.h"
//#include "header_cpp.h"

// Base class for QDockWidget

// constructors:

// Class: QDockWidget
// Function:
// Parameters: 3
// preceding Parameters: -1

// Class: QDockWidget
// Function:
// Parameters: 2
// preceding Parameters: 3

#ifndef QT_NO_ACTION

#endif

// protected overwritten functions / events and their public invokable counterparts:
void QDockWidget_Base::paintEvent(
    QPaintEvent* event
) {

    //qDebug() << "QDockWidget_Base::paintEvent()";

    //QJSValue f = self.prototype().property("paintEvent");
    QJSValue f = self.property("paintEvent");
    if (f.isCallable() /*&& !recFlag*/) {



        QJSEngine* engine = handler.getEngine();

        QJSValueList args;


        args << RJSHelper::cpp2js_QPaintEvent(
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
        QDockWidget::paintEvent(
            event
        );
    }
}

void QDockWidget_Base::mouseMoveEvent(
    QMouseEvent* event
) {

    //qDebug() << "QDockWidget_Base::mouseMoveEvent()";

    //QJSValue f = self.prototype().property("mouseMoveEvent");
    QJSValue f = self.property("mouseMoveEvent");
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
        QDockWidget::mouseMoveEvent(
            event
        );
    }
}

void QDockWidget_Base::resizeEvent(
    QResizeEvent* event
) {

    //qDebug() << "QDockWidget_Base::resizeEvent()";

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
        QDockWidget::resizeEvent(
            event
        );
    }
}



// public virtual overwritten functions / events:


// public pure-virtual functions:
