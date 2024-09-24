import { Component, computed, effect, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    template: `
    <div class="bg">
        <h2>Les Signals</h2>
        <p>Current value: {{ secondCounter() }}</p>
        <!-- <p>Double value: {{ counterDouble() }}</p> -->
        <button class="btn" (click)="incrementAgain()">
            Increment
        </button>
        <button class="btn" (click)="resetAgain()">
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

    // Les signals sans etats-derivés
    counter = signal(0);
    counterDouble = computed(() => this.counter() * 2);

    increment() {
        this.counter.update(n => n + 1);
    }

    reset() {
        this.counter.set(0);
    }

    // Gestion des effets de bord
    secondCounter = signal(0);

    constructor() {
        // Will execute when a signal will change.
        effect(() => {
            console.log(`Le compteur a été mis à jour : ${this.secondCounter()}`);
        })
    }


    incrementAgain() {
        this.secondCounter.update(n => n + 1);
    }

    resetAgain() {
        this.secondCounter.set(0);
    }
}
