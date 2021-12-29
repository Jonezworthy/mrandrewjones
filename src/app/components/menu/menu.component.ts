import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

// declare var window: { location: { pathname: string } };

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    currentUrl: string = '';
    intervalUrlUpdater: any;

    menuItems: { label: string, icon: string, routerLink: string, reverseOpacity: boolean }[] = [
        { label: 'Home', icon: 'fa-home-lg-alt', routerLink: '/', reverseOpacity: true, },
        { label: 'Technologies', icon: 'fa-code', routerLink: '', reverseOpacity: true, },
        { label: 'Personal Portfolio', icon: 'fa-bars', routerLink: '', reverseOpacity: true, },
        { label: 'Work', icon: 'fa-briefcase', routerLink: '', reverseOpacity: false, },
        { label: 'Education', icon: 'fa-school', routerLink: '', reverseOpacity: true, },
        { label: 'About Me', icon: 'fa-user', routerLink: '', reverseOpacity: true, },
        { label: 'Contact Me', icon: 'fa-phone', routerLink: '', reverseOpacity: true, },
        { label: 'Pokémon Or Tech? Game', icon: 'fa-gamepad', routerLink: '', reverseOpacity: true, },
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

    ngOnInit(): void {
        this.currentUrl = this.router.url;


        if (isPlatformBrowser(this.platformId)) {
            this.intervalUrlUpdater = setInterval(() => {
                this.currentUrl = this.router.url;
            }, 3000);
        }
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
