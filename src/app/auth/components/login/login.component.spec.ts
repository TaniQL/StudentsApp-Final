import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: AuthService
    const mockRouter = {
        navigate: jasmine.createSpy('inicio')
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientTestingModule],
            declarations: [LoginComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
        const formulario = component.formulario;
        const nombre = formulario.controls['user'];
        nombre.setValue('rosa22');
        expect(formulario.invalid).toBeTrue();
      });
      
      it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
        const formulario = component.formulario;
        const nombre = formulario.controls['user'];
        const password = formulario.controls['password'];
        nombre.setValue('rosa22');
        password.setValue('AsdfeSf99');
    
        expect(formulario.invalid).toBeFalse();
      });

    //   it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    //     component.formulario.value.user = 'dad'
    //     component.formulario.value.password = 'dad'
    //     component.formulario.value.admin = true

    //     spyOn(service, 'startSesion').and.callThrough()
    //     component.login();
    //     expect(mockRouter.navigate).toHaveBeenCalled();
    //   });
});