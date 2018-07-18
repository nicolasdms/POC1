var Menu = (function () {
    function Menu(id, title, routerLink, href, icon, cssClass, target, hasSubMenu, parentId, isActive, children) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.cssClass = cssClass;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
        this.isActive = isActive;
        this.children = children;
    }
    return Menu;
}());
export { Menu };
//# sourceMappingURL=menu.model.js.map