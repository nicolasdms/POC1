var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { SideChat } from './side-chat.model';
var chatText = 'Hi, I m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?';
var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new SideChat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/users/default-user.jpg', 'unknown', 'Offline', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', chatText, new Date(year, month, day - 2, hour, minute), 'left'),
    new SideChat('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', chatText, new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new SideChat('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new SideChat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left')
];
var SideChatService = (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        Injectable()
    ], SideChatService);
    return SideChatService;
}());
export { SideChatService };
//# sourceMappingURL=side-chat.service.js.map