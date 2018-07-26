
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TesteNavComponent } from './teste-nav.component';

describe('TesteNavComponent', () => {
  let component: TesteNavComponent;
  let fixture: ComponentFixture<TesteNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TesteNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
