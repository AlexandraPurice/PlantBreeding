import { GeneService } from './../../services/gene.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EffectModel } from 'src/app/shared/models/effect-model';

@Component({
  selector: 'app-view-effects',
  templateUrl: './view-effects.component.html',
  styleUrls: ['./view-effects.component.scss']
})
export class ViewEffectsComponent implements OnInit, AfterViewInit{
  effects: Array<EffectModel>;
  gene = {
    name: 'BnaA01g00030D',
    chr: 'A01',
    startN: '2665',
    stopN: '5455',
    description: 'protein scai-like',
    effect: 'P: termination of F-protein coupled receptor signaling pathway',
    geneCode: 'ATGGCTACTGGAGAAAACAGAACCGTGCAGGAAAATCTAAAGAAACACCTCGCAGTTTCAGTTCGAAACATTCAATGGAGTTATGGAATATTTTGGTCTATCTCTGCTTCTCAACCAGGAGTGCTGGAATGGGGAGATGGATACTACAATGGAGACATTAAGACGAGGAAGACGATTCAAGCAGTGGAAGTCAAAGCTGACCAGTTGGGTCTTGAGAGAAGCGATCAGCTTAGAGAGCTTTATGAATCTCTCTCGGTCGCGGAATCCTCAGCCTCCGGTGGCTCTCAGGTCAGTAGACGAGCTTCCGCTACCGCTCTCTCTCCGGAAGATCTCACCGACACCGAGTGGTACTACCTAGTATGCATGTCTTTCGTCTTCAACATTGGTGAAGGAATTACCGGAGGAGCATTAGGGAACGGAGAACCAATATGGCTATGTAACGCTCATACCGCCGACAGCAAAGTCTTTACTCGCTCTCTTCTCGCTAAAAGTGCTTCGCTTCTGACAGTAGTTTGCTTCCCATTTCTTGGAGGAGTCCTTGAGATCGGCACAACCGAACATATTACAGAGGACTTTAACGTGATTCAATGCGTGAAGACATTATTCCTTGAGGCTCATCCTTATGGAACTATATCAACGAGATCTGATTATCAAGAAATATTTGATCCTTTAAACAGCGATAAGTACATTCCAACGTTTGGAACTGAAGCTTTTCCGACAACTTCTACAAGCGTGTTTGAACAAGAACTAGAGGATCATGATTCGTTCATCAACGGTGGTGGTGCGTCTCAGGTACAAAGCTGGCAGTTTGTGGGTGAAGAACTCAATAACTGCGTTCACCAACCGGTTAATTCTAGCGATTGCGTTTCCCAGACGTTTGTTGGAGGAACAACCGGAAGAGTTTCTTGTAATCCAAGAAAGAGCAGGCCTCAACGGTTAGGTCAAATCCAAGAACAGAGTAACCGTTTGAATATGGACGATGATGTTCATTACCAAGGGGTGATCTCGACAATATTCAAAACAACGCATCAGCTAGTTCTTGGACCGCAATTTCAGAACTTTGATAAGCGGTCAAGTTTCACGCGGTGGAGGCGGTTGCCATTATCAGCAAAAACATTGGGAGAGAAGTCGCAAAACATGTTAAAGAAGATTGTTTTTGAGGTTCCTCGGATGCACCAGAAGGAGTTGTTGTTACCAGACACACCTGAAGATAACATGTTTAAGGTTGGGGATGAAACCGGGAACCATGCCTTGTCCGAGAGGAAATGCCGAGAGAAGTTGAATGATCGGTTCATGACGTTGAGATCAATCATTCCTTCGATTAGTAAGATCGATAAAGTGTCGATTCTTGATGATACGATTGATTATCTTCAAGAACTGCAAAGACGGGTTCAAGAATTGGAATCTTGCCGAGAATATACCGATACAGAGATGCAAATGCCTATGAAGAGGAAGAAACCGGAGGATGAAGATGAGAGAGCATCGGCTAATTGTTTGAACACCAAGAGGAAGGAGAGTGATGTGAACGTAGGAGAAGATGAACCAGCTGATACCGGTTATGCTGGTTTAACTGATAATCTAAGGATCGGTTCGTTTGGCAATGAGGTGGTTATTGAGCTTAGATGTGCTTGGAGAGAAGGTATACTGCTTGAGATAATGGATGTGATTAGTCATCTCAATTTGGATTCTCACTCGGTACAGTCCTCGACTGGGGACGGTTTACTCTGCCTAACTGTCAATTGCAAGCATAAAGGGACAAATATCGCCACAGCAGGAATGATCCAAGAGGCACTTCAAAGAGTTGCATGGATATGTTAA'
  };
  private canvas: any;
  private context: CanvasRenderingContext2D;
  private inExon: boolean;
  private x = 30;
  private y = 150;

  constructor(private _router: ActivatedRoute,
    private _geneService: GeneService,
    ) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params['id']);
      // for geneId
    });
    this._geneService.getEffects().subscribe(data => {
      this.effects = data;
      console.log(data);
    });
  }

  ngAfterViewInit() {
    this.processGraphic();
  }

  printLegend(text, textX, textY, moveX, moveY, lineX, lineY, lineWidth, lineColor) {
    this.context.beginPath();
    this.context.moveTo(moveX, moveY);
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = lineColor;
    this.context.lineTo(lineX, lineY);
    this.context.stroke();
    this.context.font = '20px Arial';
    this.context.fillText(text, textX, textY);
  }

  processGraphic() {
    this.canvas = document.getElementById('myCanvas');
    if (this.canvas) {
      this.context = this.canvas.getContext('2d');
      // print the grey lines vertically
      this.context.lineWidth = 0.5;
      this.context.strokeStyle = '#D3D3D3';
      for ( let i = 30; i < this.canvas.width ; i += 30) {
          this.context.lineTo(i - 30, this.canvas.height);
          this.context.moveTo(i, 0);
          this.context.stroke();
      }
      // print the lines informations
      this.printLegend('Exon', 80, 25, 30, 20, 70, 20, 15, '#9bce4e');
      this.printLegend('Intron', 80, 55, 30, 50, 70, 50, 3, '#ff0000');

      // print lines graph according the introns and exons from the geneCode
      this.context.beginPath();
      this.context.strokeStyle = '#9bce4e';
      this.context.moveTo(this.x, this.y);
      const str = this.gene.geneCode;
      this.context.lineWidth = 15;
      this.inExon = true;
      for (let i = 0; i < str.length ; i++) {
        if ( this.inExon ) {
          if ( str.charAt(i) === 'G' && str.charAt(i + 1) === 'T') {
            this.inExon = false;
            this.context.lineWidth = 3;
            this.context.strokeStyle = '#ff0000';

          }
        } else {
            if ( str.charAt(i) === 'A' && str.charAt(i + 1) === 'G') {
              this.inExon = true;
              this.context.lineWidth = 15 ;
              this.context.strokeStyle = '#9bce4e';
            }
        }
        this.context.beginPath();
        this.x += 1;
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x + 1, this.y);
        this.context.stroke();
      }
    }
  }
}
