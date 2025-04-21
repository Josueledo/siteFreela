import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  activeIndex: number | null = null;

  faqs = [
    { question: "Quem somos?", answer: "Somos uma empresa jovem, dinâmica e focada em consolidar nossa presença no mercado de desenvolvimento web, entregando resultados excepcionais em tudo o que fazemos.", open: false },
    { question: "Quanto tempo leva para criar um site?", answer: "O tempo para criar um site varia conforme o tamanho e a complexidade do projeto.", open: false },
    { question: "Posso atualizar meu site depois?", answer: "Com certeza! Mesmo após a entrega, estamos disponíveis para negociar e realizar atualizações conforme necessário.", open: false },
    { question: "Quais tecnologias vocês usam?", answer: "Analisamos suas necessidades para identificar as melhores tecnologias a serem aplicadas em cada projeto.", open: false }
  ];


  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;

  }
}
