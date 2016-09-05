/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'angular';
import { AppModule } from './app.module';
import { UpgradeAdapter } from '@angular/upgrade';
// declare var JQueryStatic : any;
let upgradeAdapter = new UpgradeAdapter(AppModule);
angular.module('ng1module', []);
upgradeAdapter.bootstrap(document.documentElement, ['ng1module']);
