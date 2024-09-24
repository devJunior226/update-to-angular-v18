import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    template: `
    <div class="bg">
        <h2>Les Signals</h2>
        <p>Current value: {{ counter() }}</p>
        <p>Double value: {{ counterDouble() }}</p>
        <button class="btn" (click)="increment()">
            Increment
        </button>
        <button class="btn" (click)="reset()">
            Reset
        </button>
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

        .btn {
           padding: .5rem 2rem;
           font-size: 1rem;
           cursor: pointer;
        }
    `]
})
export class AppComponent {

    // Les signals
    compteur = signal(0);

    ngOnInit(): void {
        console.log(this.compteur());

        // Modifier la valeur du compteur
        this.compteur.set(2);
        console.log(this.compteur());
    }

    // Affiher nombre et double
    counter = signal(0);
    counterDouble = signal(0);

    increment() {
        this.counter.update(n => n + 1);
        this.counterDouble.set(this.counter() * 2);
    }

    reset() {
        this.counter.set(0);

        this.counterDouble.set(0);
    }
}
