import { Component, OnInit } from '@angular/core';
import { TreeNode } from '@circlon/angular-tree-component';
import { DataSetService } from '../data-set.service'; // Import your data service

@Component({
  selector: 'app-data-sets',
  templateUrl: './data-sets.component.html',
  styleUrls: ['./data-sets.component.css']
})
export class DataSetsComponent implements OnInit{
  dataSets: TreeNode[] = [];
  treeOptions = {
    displayField: 'name',
    childrenField: 'children',
  };

  constructor(private dataSetService: DataSetService) {} // Inject your data service

  ngOnInit() {
    // Fetch data sets from your REST API using your service
    this.dataSetService.getDataSets().subscribe((data) => {
      this.dataSets = data;
    });
  }

  // Handle node selection
  onNodeSelect(event: any): void {
    // Fetch properties of the selected node and display them in data-set-properties.component
  }
}
