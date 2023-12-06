import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { Students } from 'src/app/models/students';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService]
    });
    service = TestBed.inject(StudentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be validate getStudents', () => {
    service.getStudents().subscribe();
    const req = httpMock.expectOne(r => r.method === 'GET');
    req.flush('Get')
    expect(req.request.method).toBe('GET');
  });

  it('should be validate newCourse', () => {
    const response = {};
    const student: Students = {
      id: 'string',
      firstName: 'string',
      lastName: 'string',
      status: false,
      email: 'string'
    }
    service.newCourse(student).subscribe();
    const req = httpMock.expectOne(r => r.method === 'POST');
    req.flush(response)
    expect(req.request.method).toBe('POST');
  });

  it('should be validate editStudent', () => {
    const response = {};
    const student: Students = {
      id: 'string',
      firstName: 'string',
      lastName: 'string',
      status: false,
      email: 'string'
    }
    service.editStudent(student).subscribe();
    const req = httpMock.expectOne(r => r.method === 'PUT');
    req.flush(response)
    expect(req.request.method).toBe('PUT');
  });

  it('should be validate deleteStudent', () => {
    const response = {};
    const student: Students = {
      id: 'string',
      firstName: 'string',
      lastName: 'string',
      status: false,
      email: 'string'
    }
    service.deleteStudent(student.id).subscribe();
    const req = httpMock.expectOne(r => r.method === 'DELETE');
    req.flush(response)
    expect(req.request.method).toBe('DELETE');
  });
});
