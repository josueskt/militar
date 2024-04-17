import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../auts/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  private auth = inject(AuthService)
  user!:any  
  ngOnInit(): void {
    
    this.user =   this.auth.getUserInfo()
  }


  
  
  
  
 

}
