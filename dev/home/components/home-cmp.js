"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var plant_service_1 = require("../../services/plant.service");
var calendar_1 = require("ap-angular2-fullcalendar/src/calendar/calendar");
var HomeCmp = (function () {
    function HomeCmp(plantService) {
        this.plantService = plantService;
        this.plants = [];
        this.calendarOptions = {
            height: 'parent',
            fixedWeekCount: false,
            defaultDate: '2016-09-12',
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-09-01'
                },
                {
                    title: 'Long Event',
                    start: '2016-09-07',
                    end: '2016-09-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-09-11',
                    end: '2016-09-13'
                },
                {
                    title: 'Meeting',
                    start: '2016-09-12T10:30:00',
                    end: '2016-09-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2016-09-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2016-09-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2016-09-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2016-09-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2016-09-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-09-28'
                }
            ]
        };
        this.refresh(this);
    }
    HomeCmp.prototype.refresh = function (self) {
        self.plantService.getAll().subscribe(function (result) {
            result.forEach(function (element) {
                var found = false;
                self.plants.forEach(function (plant, index) {
                    if (plant._id == element._id) {
                        found = true;
                        self.plants[index].humidity = element.humidity;
                    }
                });
                if (!found)
                    self.plants.push(element);
            });
            setTimeout(function () { self.refresh(self); }, 10000);
        });
    };
    HomeCmp.prototype.changeCalendarView = function (view) {
        this.myCalendar.fullCalendar('changeView', view);
    };
    __decorate([
        core_1.ViewChild(calendar_1.CalendarComponent),
        __metadata("design:type", calendar_1.CalendarComponent)
    ], HomeCmp.prototype, "myCalendar", void 0);
    HomeCmp = __decorate([
        core_1.Component({
            selector: "home-cmp",
            templateUrl: "home/templates/home.html",
            styleUrls: ["home/styles/home.css"],
            providers: [plant_service_1.PlantService]
        }),
        __param(0, core_1.Inject(plant_service_1.PlantService)),
        __metadata("design:paramtypes", [plant_service_1.PlantService])
    ], HomeCmp);
    return HomeCmp;
}());
exports.HomeCmp = HomeCmp;
