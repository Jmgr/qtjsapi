

// Auto generated
// Adds public versions for event handlers to be called from
// JS implementation of these event handlers.

// include header:
#include "qslider_base.h"
//#include "qslider_wrapper.h"
//#include "header_cpp.h"

// Base class for QSlider

// constructors:

// Class: QSlider
// Function:
// Parameters: 2
// preceding Parameters: -1

// Class: QSlider
// Function:
// Parameters: 1
// preceding Parameters: 2

// protected overwritten functions / events and their public invokable counterparts:
void QSlider_Base::paintEvent(
    QPaintEvent* ev
) {

    //qDebug() << "QSlider_Base::paintEvent()";

    //QJSValue f = self.prototype().property("paintEvent");
    QJSValue f = self.property("paintEvent");
    if (f.isCallable() /*&& !recFlag*/) {



        QJSEngine* engine = handler.getEngine();

        QJSValueList args;


        args << RJSHelper::cpp2js_QPaintEvent(
                 handler,
                 // non-copyable: true
                 ev
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
        QSlider::paintEvent(
            ev
        );
    }
}

void QSlider_Base::mouseMoveEvent(
    QMouseEvent* ev
) {

    //qDebug() << "QSlider_Base::mouseMoveEvent()";

    //QJSValue f = self.prototype().property("mouseMoveEvent");
    QJSValue f = self.property("mouseMoveEvent");
    if (f.isCallable() /*&& !recFlag*/) {



        QJSEngine* engine = handler.getEngine();

        QJSValueList args;


        args << RJSHelper::cpp2js_QMouseEvent(
                 handler,
                 // non-copyable: true
                 ev
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
        QSlider::mouseMoveEvent(
            ev
        );
    }
}



// public virtual overwritten functions / events:


// public pure-virtual functions:
