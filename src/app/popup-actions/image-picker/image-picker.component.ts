import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfImageAnimations } from 'src/app/animations';
import { SiteService } from 'src/app/services/site.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
  animations: [
    ngIfImageAnimations
  ]
})
export class ImagePickerComponent implements OnInit, OnDestroy {

  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  borders: string[] = [];
  accessories: string[] = [];
  type!: string;
  borderChanged: boolean = false;
  accessoryChanged: boolean = false;
  listener!: Subscription;
  selectedImage!: number;
  updatedImage!: string | undefined;
  originalImage!: string | undefined;
  constructor(
    private WEB3service: Web3Service,
    private route: ActivatedRoute,
    private router: Router,
    private SITEservice: SiteService
  ) {
    this.listener = this.route.params.subscribe(async params => {
      this.type = params['type'];
      if (this.type === 'border') {
        this.originalImage = this.SITEservice.editedUser.getValue().borderUri;
      } else if (this.type === 'accessory') {
        this.originalImage = this.SITEservice.editedUser.getValue().accessoryUri;
      }
      console.log(this.originalImage);
    });
  }

  ngOnInit(): void {
    this.borders.length = 424;
    this.accessories.length = 312;
  }

  ngOnDestroy(): void {
    if(this.listener) {
      this.listener.unsubscribe();
    }
  }

  selectBorder(index: number) {
    this.borderChanged = true;
    this.selectedImage = index;
    this.updatedImage = '../assets/textures/' + this.selectedImage + '.png';
    this.SITEservice.editedUser.getValue().borderUri = this.updatedImage;
  }

  selectAccessory(index: number) {
    this.accessoryChanged = true;
    this.selectedImage = index;
    this.updatedImage = '../assets/accessories/png/' + this.selectedImage + '.png';
    this.SITEservice.editedUser.getValue().accessoryUri = this.updatedImage;
  }

  save() {
    if((this.accessoryChanged && this.type === 'accessory') || (this.borderChanged && this.type === 'border')) {
      this.router.navigate([{outlets: {
        popupAction: ['empty']
      }}]);
    }
  }

  cancel() {
    if (this.type === 'border') {
      if (this.originalImage !== '') {
        this.SITEservice.editedUser.getValue().borderUri = this.originalImage;
      } else {
        this.SITEservice.editedUser.getValue().borderUri = '';
      }
    } else if (this.type === 'accessory') {
      if (this.originalImage !== '') {
        this.SITEservice.editedUser.getValue().accessoryUri = this.originalImage;
      } else {
        this.SITEservice.editedUser.getValue().accessoryUri = '';
      }
    }
    this.router.navigate([{outlets: {
      popupAction: ['empty']
    }}]);
  }

}
