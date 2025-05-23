

// Auto generated
// Adds public versions for event handlers to be called from
// JS implementation of these event handlers.

#ifndef QDIALOG_H_BASE
#define QDIALOG_H_BASE

// include header:
//#include "header_h.h"

#include "../RJSHelper.h"

#include <QPushButton>

#include <QQmlEngine>


#include <QDialog>

// Base class for QDialog
class QDialog_Base : public QDialog {


    //Q_OBJECT


public:


    // constructors:

    // Class: QDialog
    // Function:
    // Parameters: 2
    // preceding Parameters: -1
    QDialog_Base

    (


        RJSApi& _h

        ,
        QWidget* parent=nullptr, Qt::WindowFlags f=Qt::WindowFlags()
    )

        : QDialog(
              parent, f
          )

        , handler(_h) /*, recFlag(false)*/

    {}

#ifndef QT_NO_CONTEXTMENU

#endif

    // destructor:
    virtual ~QDialog_Base() { }

public:
    // set handler:
    //void setHandler(RJSApi* h) {
    //  handler = h;
    //}

    // protected overwritten functions / events and their public invokable counterparts:

protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
        QResizeEvent* a1
    );

public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
        QResizeEvent* a1
    ) {
        //qDebug() << "QDialog_Base::resizeEventPublic()";
        QDialog::resizeEvent(
            a1
        );
    }


    // public virtual overwritten functions / events:


    // public pure-virtual functions:


public:
    //void setRecFlag(bool on) {
    //  recFlag = on;
    //}

public:
    QJSValue self;

private:

    RJSApi& handler;

    //bool recFlag;

};

#endif
