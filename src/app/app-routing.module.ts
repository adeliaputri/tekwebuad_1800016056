import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component'; 
import { HalamanBaruComponent } from './pages/halaman-baru/halaman-baru.component';


const routes: Routes = [
	{
		path:'home',
		component:HomeComponent
	
	},
	
	{
		path:'student',
		component:StudentComponent
		
	},
	
	{
		path:'halaman-baru',
		component:HalamanBaruComponent
	}
	


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
