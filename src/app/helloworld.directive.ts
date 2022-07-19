import { AnimationPlayer, AnimationBuilder, AnimationMetadata, animate, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AlignCenterDirective } from './align-center.directive';

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

    setInterval(() => {
      const factory = this.builder.build([
        style({ ...this.commonStyle }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
      const player = factory.create(this.el.nativeElement)
      
      player.play()

      let randomization = Math.floor(Math.random() * this.colors.length)
      
      console.log(`Randomization: ${this.colors[randomization]}`)

      this.commonStyle.backgroundColor = this.colors[randomization]

    }, 1000)
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
    // }, 1000)
  }

  commonStyle = {
    backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)],
    padding: "2em",
    textAlign: "center",
    borderRadius: "25px",
    opacity: "0"
  }

  // private fadeIn(): AnimationMetadata[] {
  //   return [
  //     style({ opacity: 0, ...this.commonStyle }),
  //     animate('1s ease-in', style({ opacity: 1 }))
  //   ]
  // }

  // private fadeOut(): AnimationMetadata[] {
  //   return [
  //     style({ opacity: "*", ...this.commonStyle }),
  //     animate('1s ease-in', style({ opacity: 0 }))
  //   ]
  // }

}
