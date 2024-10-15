import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  template: `
    .
    <div class="container">
      <h1 class="title">Pokemons City</h1>
      <div class="container">
        <div class="content">
          <p>Name: {{ name() }}</p>
          <p>Taille: {{ size() }}</p>
          <p>Life: {{ life() }}</p>
        </div>

        <button class="btn" (click)="incrementLife()">+</button>
        <button class="btn" (click)="decrementLife()">-</button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-left: 2rem;
      }

      .content {
        border: 1px solid;
        width: 50%;
        margin: 12px 0;
        padding: 10px;
      }
      .bg {
        background: #0000ff;
        padding: 2rem;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
      }

      .btn {
        padding: 0.5rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        margin-right: 5px;
      }

    `,
  ],
})
export class DemoComponent {
  name = signal('Pikachu');
  life = signal(21);
  size = computed(() => {
    if (this.life() <= 15) {
      return 'Petit';
    }

    if (this.life() >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  });

  incrementLife() {
    this.life.update((n) => n + 1);
  }

  decrementLife() {
    this.life.update((n) => n - 1);
  }
}
