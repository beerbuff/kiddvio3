import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { TestloginPage } from '../pages/testlogin/testlogin';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MenuteacherPage } from '../pages/menuteacher/menuteacher';
import { MenuteachertwoPage } from '../pages/menuteachertwo/menuteachertwo';
import { MenuteacherthreePage } from '../pages/menuteacherthree/menuteacherthree';
import { QrScanPage } from '../pages/qr-scan/qr-scan';
import { CheckstudyPage } from '../pages/checkstudy/checkstudy';
import { SaveSickPage } from '../pages/save-sick/save-sick';
import { StudentviewPage } from '../pages/studentview/studentview';
import { QrScantwoPage } from '../pages/qr-scantwo/qr-scantwo';
import { CheckstudytwoPage } from '../pages/checkstudytwo/checkstudytwo';
import { SaveSicktwoPage } from '../pages/save-sicktwo/save-sicktwo';
import { StudentviewtwoPage } from '../pages/studentviewtwo/studentviewtwo';
import { QrScanthreePage } from '../pages/qr-scanthree/qr-scanthree';
import { CheckstudythreePage } from '../pages/checkstudythree/checkstudythree';
import { SaveSickthreePage } from '../pages/save-sickthree/save-sickthree';
import { StudentviewthreePage } from '../pages/studentviewthree/studentviewthree';
import { MenuparentPage } from '../pages/menuparent/menuparent';
import { ActivityviewPage } from '../pages/activityview/activityview';
import { QrCodePaPage } from '../pages/qr-code-pa/qr-code-pa';
import { BmiviewPage } from '../pages/bmiview/bmiview';
import { LeaveSickPage } from '../pages/leave-sick/leave-sick';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    TestloginPage,
    MenuteacherPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    QrScanPage,
    CheckstudyPage,
    SaveSickPage,
    StudentviewPage,

    QrScantwoPage,
    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,

    QrScanthreePage,
    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,

    MenuparentPage,
    ActivityviewPage,
    QrCodePaPage,
    BmiviewPage,
    LeaveSickPage,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    TestloginPage,
    MenuteacherPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    QrScanPage,
    CheckstudyPage,
    SaveSickPage,
    StudentviewPage,

    QrScantwoPage,
    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,
    
    QrScanthreePage,
    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,

    MenuparentPage,
    ActivityviewPage,
    QrCodePaPage,
    BmiviewPage,
    LeaveSickPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
