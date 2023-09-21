
  // Auto generated
  
  #ifndef QPAGERANGES_H_WRAPPER
  #define QPAGERANGES_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QPageRanges>
      
      // singleton class wrapper for static functions:
      class QPageRanges_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPageRanges_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QPageRanges
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QPageRanges_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPageRanges
    class QPageRanges_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPageRanges_Wrapper(const QPageRanges_Wrapper&);

    public:
      // initialization of QPageRanges:
      static void init(RJSApi& handler);

      
        static QPageRanges* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QPageRanges_Type:
                return (QPageRanges*)vp;
            

          default:
            return nullptr;
          }
        }

        static QPageRanges* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPageRanges*: wrapper wraps NULL";
          }

          QPageRanges* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPageRanges*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPageRanges_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPageRanges_Wrapper(RJSApi& h, QPageRanges* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPageRanges_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPageRanges
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPageRanges_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QPageRanges
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageRanges
    // Function: addPage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPage
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageRanges
    // Function: addRange
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addRange
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageRanges
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QPageRanges
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toString
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageRanges
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contains
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPageRanges
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageRanges
    // Function: firstPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstPage
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageRanges
    // Function: lastPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastPage
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageRanges
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  detach
              (

                
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QPageRanges_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QPageRanges* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPageRanges* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QPageRanges* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QPageRanges_Wrapper*)

    Q_DECLARE_INTERFACE(QPageRanges_Wrapper, "org.qcad.QPageRanges_Wrapper")

  
  #endif
  