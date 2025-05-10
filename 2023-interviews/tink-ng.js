
// not working, just example

// @Component({
//   selector: 'user',
//   template: `
//     <div>Hello, {{user.name}}</div>
//   `
// })
// export class UserComponent {
//   @Input() userId: string;
//   public user: UserInterface;

//   constructor() {
//     const userService = new UserService();
//     userService.getUser$(this.userId).subscribe(user => this.user = user);
//   }
// }


/**
 * 1) Сервис инжектируем в конструкторе
 * доп вопрос - как определить откуда брать этот инстанс ?
 * @Injectable({ providedIn: 'root' })
 * Дерево инжекторов нод ???
 * 2) В конструкторе сервис уже будет
 * 3) Инпут свойство будет доступно только в ngOnInit
 * 4) хуки жизненного цикла
 * 5) подписка - отписка onDestroy$
 * 6) *ngIf - когда там отрисовка сработает?
 * 7) ng-container ng-template ng-content
 * 8) changeDetection -> enum ChangeDetectionStrategy.OnPush
 */

 @Component({
  selector: 'user',
  template: `
    <div *ngIf="user">Hello, {{user.name}} <my-loader></my-loader> </div>
    <ng-template #loading></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() userId: string;
  public user: UserInterface;

  private onDestroy$ = nem Subject<boolean>();


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser$(this.userId)
      .pipe(
        takeUntil(onDestroy$)
      )
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}

@NgModule({
  providers: [UserService],
})

