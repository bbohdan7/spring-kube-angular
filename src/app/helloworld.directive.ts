import { AnimationPlayer, AnimationBuilder, AnimationMetadata, animate, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHelloworld]'
})
export class HelloworldDirective {

  player!: AnimationPlayer

  @Input()
  set show(show: boolean) {
    if (this.player) {
      this.player.destroy()
    }

    const metadata = show ? this.fadeIn() : this.fadeOut()

    const factory = this.builder.build(metadata)
    const player = factory.create(this.el.nativeElement)

    player.play()
  }

  colors = [
    "hotpink", 
    "goldenrod", 
    "peachpuff", 
    "darksalmon", 
    "cornflowerblue", 
    "blanchedalmond",
    "mediumspringgreen",
    "lightskyblue"
  ]



  constructor(private builder: AnimationBuilder, private el: ElementRef) {
    // setInterval(() => {
    //   el.nativeElement.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    //   el.nativeElement.style.padding = "2em"
    //   el.nativeElement.style.textAlign = "center"
    //   el.nativeElement.style.borderRadius = "25px"
    //   el.nativeElement.style.transition = "2sec"
    // }, 1000)
  }

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('1s ease-in', style({ opacity: 1 }))
    ]
  }

  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: "*" }),
      animate('1s ease-in', style({ opacity: 0 }))
    ]
  }

}
