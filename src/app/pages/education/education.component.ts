import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
    constructor() { }


    educations: { title: string, issuer: string, date: string, grade: string, logo: string, certificateUrl?: string, invert?: boolean }[] = [
        {
            title: 'New Leadership Programme (6 day course)',
            issuer: 'Beyond Theory',
            date: 'December 2019',
            grade: 'Pass',
            logo: 'beyond-theory.png',
        }, {
            title: 'M201 MongoDB Performance',
            issuer: 'MongoDB University',
            date: 'October 2018',
            grade: '100% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/095f0ed9-9292-494c-9b0d-e3932d98',
            logo: 'mongodb-university.png'
        }, {
            title: 'M301 MongoDB Security',
            issuer: 'MongoDB University',
            date: 'October 2018',
            grade: '97% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/0fcdd3f7-832c-4044-843f-1d85d25d',
            logo: 'mongodb-university.png'
        }, {
            title: 'HTML5 Coding Essentials and Best Practices',
            issuer: 'W3Cx',
            date: 'April 2017',
            grade: '79% (Pass)',
            logo: 'w3cx.png',
            invert: true,
        }, {
            title: 'Introduction to jQuery',
            issuer: 'Microsoft',
            date: 'April 2017',
            grade: '79% (Pass)',
            logo: 'microsoft.png',
        }, {
            title: 'Windows PowerShell basics',
            issuer: 'Microsoft',
            date: 'April 2017',
            grade: '83% (Pass)',
            logo: 'microsoft.png',
        }, {
            title: 'M101JS MongoDB for Node.js Developers',
            issuer: 'MongoDB University',
            date: 'December 2016',
            grade: '92% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/41fb9adfd648415d87c33be96a9db3be',
            logo: 'mongodb-university.png'
        }, {
            title: 'Introduction to MongoDB using the MEAN stack',
            issuer: 'MongoDB University',
            date: 'November 2016',
            grade: '89% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/e2ddeb18ae3a4eb8abe3a10ddfbc036e',
            logo: 'mongodb-university.png'
        }, {
            title: 'Querying with Transact-SQL',
            issuer: 'Microsoft',
            date: 'November 2016',
            grade: '74% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/c0c99a6e14c2444b8a36c43988825266',
            logo: 'microsoft.png',
        }, {
            title: 'Information Systems and Computer Applications',
            issuer: 'University of Valencia',
            date: 'November 2016',
            grade: '96% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/b2db5090136440708718ebeab1c20455',
            logo: 'valencia.png',
        }];

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    trackByIndex(index: number): number {
        return index;
    }
    getHueFromIndex(index: number): string {
        if (index % 2 === 0) {
            return '2';
        }
        return '0';
    };

    keysOf(object: Object): string[] {
        return Object.keys(object);
    }
}
