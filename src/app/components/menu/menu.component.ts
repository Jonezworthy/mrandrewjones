import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// declare var window: { location: { pathname: string } };

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    currentUrl: string = '';
    intervalUrlUpdater: any;
    menuVisible: Boolean = false;

    menuItems: { label: string, icon: string, routerLink: string, reverseOpacity: boolean }[] = [
        { label: 'Home', icon: 'fa-home-lg-alt', routerLink: '', reverseOpacity: true, },
        { label: 'About Me', icon: 'fa-user', routerLink: 'about', reverseOpacity: true, },
        { label: 'Work', icon: 'fa-briefcase', routerLink: 'work', reverseOpacity: false, },
        { label: 'Technologies', icon: 'fa-code', routerLink: 'tech', reverseOpacity: true, },
        { label: 'Portfolio', icon: 'fa-bars', routerLink: 'portfolio', reverseOpacity: true, },
        { label: 'Education', icon: 'fa-school', routerLink: 'education', reverseOpacity: true, },
        { label: 'Contact Me', icon: 'fa-phone', routerLink: 'contact', reverseOpacity: true, },
        { label: 'Pokémon Or Tech? Game', icon: 'fa-gamepad', routerLink: 'game', reverseOpacity: true, },
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

    ngOnInit(): void {
        this.currentUrl = this.router.url;


        if (isPlatformBrowser(this.platformId)) {
            this.intervalUrlUpdater = setInterval(() => {
                this.currentUrl = this.router.url;

                if (window.screen.availWidth > 992) { // if not mobile
                    this.menuVisible = true;
                }
            }, 250);
        }

    }

    toggleMenu(): void {
        this.menuVisible = !this.menuVisible;
    }

    isActiveRoute(path: string): string {

        if (this.currentUrl === path) {
            return 'menu-item active';
        } else {
            return 'menu-item';
        }
    }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId)) {
            clearInterval(this.intervalUrlUpdater);
        }
    }
}
