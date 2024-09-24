import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    template: `
    <div class="bg">
        <h2>La réactivité “Observable-based”</h2>
        <p>Counter: {{ count$ | async }}</p>
        <button (click)="increment()">Increment</button>
    </div>
    `,

    styles: [`
        .bg {
            background: #0000ff;
            padding: 2rem;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
    `]
})
export class AppComponent {
    name: string = "Pikachu";
    life: number = 21;

    // 1. La réactivité “Value-based”
    // count: number = 0;
    // doCount() {
    //     this.count++;
    // }

    // 2. La réactivité “Observable-based”
    private countSubject = new BehaviorSubject<number>(0);
    count$: Observable<number> = this.countSubject.asObservable();
    increment() {
        this.countSubject.next(this.countSubject.value + 1);
    }


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
