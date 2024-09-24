import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    template: `
    <div class="bg">
        <h2>Les Signals</h2>
        <p>Current value: {{ counter }}</p>
        <button class="btn" (click)="incrementValue()">
            Increment
        </button>
        <button class="btn" (click)="resetValue()">
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

    // Mettre a jour le compteur
    doIncrement() {
        this.compteur.update(value => value + 1);
    }

    // Practice Signals: Without signals
    counter: number = 0;

    incrementValue() {
        this.counter++;
    }

    resetValue() {
        this.counter = 0;
    }

    
}
