import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root' // 서비스 프로바이더를 최상위 인젝터에 등록
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: 메시지는 히어로 데이터를 가져온 _후에_ 보내야 합니다.
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id : number): Observable<Hero> {
    // TODO: 메시지는 히어로 데이터를 가져온 _후에_ 보내야 합니다.
    this.messageService.add(`HeroSerice: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
