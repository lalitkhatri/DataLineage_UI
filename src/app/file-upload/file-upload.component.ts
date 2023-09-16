import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
      this.http.post('http://your-spring-api-url/upload', formData).subscribe(
        (response) => {
          // Successful upload - navigate to the root
          this.router.navigate(['']);
        },
        (error) => {
          // Failed upload - show error message
          this.showErrorMessage('File upload failed');
        }
      );
    }
  }

  private showErrorMessage(message: string) {
    const snackBarRef = this.snackBar.open(message, 'Dismiss', {
      duration: 5000, // Duration in milliseconds
    });

    snackBarRef.onAction().subscribe(() => {
      // Handle dismissal (if needed)
    });
  }
}
