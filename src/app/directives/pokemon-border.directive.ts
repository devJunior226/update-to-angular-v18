import {Directive, ElementRef, HostListener, input} from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true,
})
export class PokemonBorderDirective {
  private initialColor: string;
  pokemonType = input.required<string>();

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '4px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // const color = 'green';
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  /** Afficher la couleur de la bordure en fonction du type de pokémon */
  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42A5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison':
        return '#b388ff';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      default:
        return '#303030';
    }
  }
}
