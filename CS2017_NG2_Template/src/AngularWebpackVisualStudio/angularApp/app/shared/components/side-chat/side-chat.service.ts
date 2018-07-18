import { Injectable } from '@angular/core';
import { SideChat } from './side-chat.model';

const chatText =
	'Hi, I m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?';
const date = new Date(),
	day = date.getDate(),
	month = date.getMonth(),
	year = date.getFullYear(),
	hour = date.getHours(),
	minute = date.getMinutes();

const chats = [
	new SideChat(
		'assets/img/profile/ashley.jpg',
		'Ashley Ahlberg',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/profile/bruno.jpg',
		'Bruno Vespa',
		'Do not disturb',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-3.png',
		'Andy Warhol',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/profile/julia.jpg',
		'Julia Aniston',
		'Away',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/profile/adam.jpg',
		'Adam Sandler',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-7.png',
		'Lusia Manuel',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/profile/tereza.jpg',
		'Tereza Stiles',
		'Offline',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/users/default-user.jpg',
		'unknown',
		'Offline',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-1.png',
		'Jeremi Powell',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-8.png',
		'Calico Jack',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/profile/michael.jpg',
		'Michael Blair',
		'Online',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-5.png',
		'Michelle Ormond',
		'Away',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	),
	new SideChat(
		'assets/img/avatars/avatar-6.png',
		'Sean Connery',
		'Offline',
		chatText,
		new Date(year, month, day - 2, hour, minute),
		'left'
	)
];

const talks = [
	new SideChat(
		'assets/img/users/user.jpg',
		'Emilio Verdines',
		'Online',
		'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...',
		new Date(year, month, day - 2, hour, minute + 2),
		'right'
	),
	new SideChat(
		'assets/img/profile/ashley.jpg',
		'Ashley Ahlberg',
		'Online',
		'Great, then I ll definitely buy this theme. Thanks!',
		new Date(year, month, day - 2, hour, minute + 3),
		'left'
	)
];

@Injectable()
export class SideChatService {
	public getChats(): Array<Object> {
		return chats;
	}

	public getTalk(): Array<Object> {
		return talks;
	}
}
