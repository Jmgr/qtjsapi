

// Auto generated
// Adds public versions for event handlers to be called from
// JS implementation of these event handlers.

// include header:
#include "qsplitter_base.h"
//#include "qsplitter_wrapper.h"
//#include "header_cpp.h"

// Base class for QSplitter

// constructors:

// Class: QSplitter
// Function:
// Parameters: 2
// preceding Parameters: -1

// Class: QSplitter
// Function:
// Parameters: 1
// preceding Parameters: 2

// protected overwritten functions / events and their public invokable counterparts:
void QSplitter_Base::resizeEvent(
    QResizeEvent* a1
) {

    //qDebug() << "QSplitter_Base::resizeEvent()";

    //QJSValue f = self.prototype().property("resizeEvent");
    QJSValue f = self.property("resizeEvent");
    if (f.isCallable() /*&& !recFlag*/) {



        QJSEngine* engine = handler.getEngine();

        QJSValueList args;


        args << RJSHelper::cpp2js_QResizeEvent(
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
        QSplitter::resizeEvent(
            a1
        );
    }
}



// public virtual overwritten functions / events:


// public pure-virtual functions:

// Base class for QSplitterHandle

// constructors:

// Class: QSplitterHandle
// Function:
// Parameters: 2
// preceding Parameters: -1

// protected overwritten functions / events and their public invokable counterparts:
void QSplitterHandle_Base::paintEvent(
    QPaintEvent* a1
) {

    //qDebug() << "QSplitterHandle_Base::paintEvent()";

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
        QSplitterHandle::paintEvent(
            a1
        );
    }
}

void QSplitterHandle_Base::mouseMoveEvent(
    QMouseEvent* a1
) {

    //qDebug() << "QSplitterHandle_Base::mouseMoveEvent()";

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
        QSplitterHandle::mouseMoveEvent(
            a1
        );
    }
}

void QSplitterHandle_Base::resizeEvent(
    QResizeEvent* a1
) {

    //qDebug() << "QSplitterHandle_Base::resizeEvent()";

    //QJSValue f = self.prototype().property("resizeEvent");
    QJSValue f = self.property("resizeEvent");
    if (f.isCallable() /*&& !recFlag*/) {



        QJSEngine* engine = handler.getEngine();

        QJSValueList args;


        args << RJSHelper::cpp2js_QResizeEvent(
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
        QSplitterHandle::resizeEvent(
            a1
        );
    }
}



// public virtual overwritten functions / events:


// public pure-virtual functions:
