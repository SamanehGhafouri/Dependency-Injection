import { Injectable } from "@angular/core";
import {Metric, AnalyticsImplementation} from "../analytics-demo/analytics.demo.interface";

@Injectable()

export class AnalyticsService {
  constructor(private implementations: AnalyticsImplementation) {
  }

  record(metric: Metric): void{
    this.implementations.recordEvent(metric);
  }

}
