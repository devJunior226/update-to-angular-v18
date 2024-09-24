import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    name: string = "Pikachu";
    life: number = 21;

    ngOnInit(): void {
        let a_0: number = 1;
        let a_1: number = 2;
        let a_2 = a_0 + a_1;
        console.log(a_2);
    }


    incrementLife() {
        this.life = this.life + 1;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    decrementLife() {
        this.life = this.life - 1;
    }
}
