import { Injectable } from '@angular/core';
import { Observable, of, pipe, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';
import { HttpHeaders } from '@angular/common/http';

import {throwError} from 'rxjs';
import * as _ from 'lodash';

// import {PublicHttpService} from '@network-visualizer-core/public-http/PublicHttpService';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private publicHttp: PublicHttpService) { }
  getInitialData() {
    // const url = 'http://localhost:3050/api/initialdata';
    const url = '/api/initialdata';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchData(body) {
    // const url = 'http://localhost:3050/api/graph/data';
    const url = '/api/graph/data';
    return this.publicHttp.post(url, body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getNodeLabels(): Observable<any> {
    // const url = 'http://localhost:3050/api/graph/labeldata';
    // return this.publicHttp.get(url).pipe(map(data => {
    //   if (!!data) {
    //     return data;
    //   } else {
    //     return of({});
    //   }
    // }));
    let data = {
      "Name": [
        "Accenture",
        "Aditya Birla CSR",
        "AIILSG",
        "Amani Institute",
        "Anahad",
        "Annalie Killian",
        "Acumen",
        "Advaith Foundation",
        "Alan Schwartz",
        "Amnesty International",
        "Andrew Ng",
        "APF",
        "Arghyam",
        "ATREE",
        "BCG",
        "Bhavtosh Vajpayee",
        "Bloomberg (NEF)",
        "Bosch Foundation",
        "Bridgespan",
        "Brookings",
        "Central Square Foundation",
        "Chamath Palihapitiya",
        "Chandu Bhave",
        "Cisco",
        "Co-Impact",
        "Cornell",
        "APPI",
        "Ashoka Fellows",
        "Avanti Finance",
        "Bharat Innovation Fund",
        "Bill Gates",
        "BMGF",
        "BRAC",
        "British Asian Trust",
        "C&R",
        "CGD",
        "Chandler Foundation",
        "Chris Anderson",
        "Clearly Vision",
        "Code For America",
        "Dalberg",
        "Dayle Stevens",
        "Dell",
        "Dept. of Agriculture (AP)",
        "Devex",
        "Digital Green",
        "Dasra",
        "deAsra",
        "Deloitte",
        "Deshpande Foundation",
        "DIAL",
        "Don Norman",
        "ECF",
        "Edumentum",
        "EkStep",
        "FHI360",
        "Founding Fuel",
        "Future State",
        "GDI",
        "Giving Pledge",
        "Goradia Foundation",
        "Guidestar",
        "Harry Hertz",
        "Harvard Kennedy School",
        "Heather McGowan",
        "IDR",
        "Drucker Forum",
        "ECHO",
        "eGovernments",
        "EY",
        "Ford Foundation",
        "FSG",
        "Gates Foundation",
        "Genpact",
        "Goonj",
        "Greymatters Capital",
        "Harambee",
        "Harvard Business School",
        "Health Stack",
        "ICICI",
        "IIHS",
        "IIMB",
        "IKEA Foundation",
        "Imago",
        "India Stack",
        "Ingrid Srinath",
        "IIITB",
        "IIT-IIT",
        "ILIMI",
        "In The Field",
        "Indian School of Democracy",
        "Institute For Transformative Tech.",
        "IPI",
        "iSpirt",
        "JPAL",
        "Last Mile Health",
        "Living Farms",
        "London Business School",
        "McKinsey",
        "MHRD",
        "Mindtree Org",
        "MoHUA",
        "OxFord",
        "Nasscom Foundation",
        "NIEPA",
        "NIUA",
        "NSRCEL",
        "Intelehealth",
        "ISDM",
        "John McDermott",
        "Landesa",
        "Lean Impact",
        "Living Goods",
        "MAGC",
        "Mercy Corps",
        "Michael Susan Dell Foundation",
        "MIT",
        "N/Core",
        "New America Foundation",
        "NIIT",
        "Nilekani Philanthropies",
        "NSDC",
        "Ola Foundation",
        "One Acre Fund",
        "ORF",
        "PEI (Graduation)",
        "Piramal Foundation",
        "Omidyar Network",
        "Open Mobility",
        "Pankaj Jalote",
        "PIE (Livelihoods)",
        "Pivotal Ventures",
        "Precision Ag Dev",
        "PwC",
        "Ram Sewak Sharma",
        "SAMA",
        "Sameer Dua",
        "Sangeet Paul Chaudhry",
        "Sara Chamberlain",
        "ShikshaLokam",
        "Skoll",
        "Socion",
        "Stefan Dercon",
        "SVP",
        "Tasvereein",
        "TechSoup",
        "Tom Monahan",
        "Pratham Books",
        "Project Evident",
        "Raj Shah",
        "Rita McGrath",
        "Samagra Consulting",
        "Samhita",
        "Santhosh Mathew",
        "Sattva",
        "Skill Stack",
        "Social Alpha",
        "Stanford PACS",
        "Strategyzer",
        "Tarento",
        "Tata Trusts",
        "Thomas Friedman",
        "TouchKin",
        "UNDP",
        "Unilever",
        "Unleash",
        "UNSDN",
        "Ugly Indian",
        "UNICEF",
        "University of Wisconsin",
        "UnLtd",
        "UNSSC",
        "Venkat Ramaswamy",
        "Wadhwani AI",
        "WEF",
        "World Bank",
        "Vayam",
        "Vidhi Legal",
        "Wadhwani Foundation",
        "WHU"

      ],
      "Type": [
        "Philanthropy",
        "NGO/CBO",
        "Consulting",
        "Research Institute",
        "Private Sector",
        "Government",
        "Impact Investor",
        "Media",
        "Academia",
        "International Agency"

      ],
      "Represent": [
        "Capital",
        "Reach",
        "Research Capacity",
        "Platform",
        "Talent",
        "Technology Expertise",
        "Partners",
        "Advisory"

      ],
      "Status": [
        "Active",
        "Dormant"
      ],
      "Understanding of SP Thinking": [
        "Defined",
        "Early",
        "Mature"
      ],
      "Connection": [
        "Connected"
      ],
      "Relationships": [
        "Advisory",
        "Collaborator",
        "Partner",
        "Service Provider"
      ]
    }
    return of(data);
  }
  getInitialDataV2() {
    // const url = 'http://localhost:3050/api/initialdatav2';
    const url = '/api/initialdatav2';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchDataV2(body) {
    // const url = 'http://localhost:3050/api/graph/datav2';
    const url = '/api/graph/datav2';
    return this.publicHttp.post(url, body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }

  createNewNode(nodeData) {
    const url = '/api/graph/node/create';
    // tslint:disable-next-line: max-line-length
    if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
      // initial conditions are okay, now send the creation request
      return this.publicHttp.post(url, nodeData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  updateNode(nodeData) {
    const url = '/api/graph/node/update';
    // tslint:disable-next-line: max-line-length
    if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
      // initial conditions are okay, now send the creation request
      return this.publicHttp.post(url, nodeData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  createNewRelation(relationData) {
    const url = '/api/graph/relation/create';
    if (relationData.hasOwnProperty('type') &&  relationData.hasOwnProperty('to') && relationData.hasOwnProperty('from') ) {
      // data is okay now prepare to send
      return this.publicHttp.post(url, relationData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    }
    else {
      return throwError('Invalid data provided');
    }
  }

  getGraphRelations(): Observable<any> {
    const url = '/api/graph/relations';
    return this.publicHttp.get(url).pipe(map (data => {
      return data;
    }));
  }

  getNodeNames() {
    return this.getInitialDataV2().pipe(map(data => {
      let nodeNames = [];
      if (data.hasOwnProperty('seperateNodes')) {
        let newData = _.cloneDeep(data['seperateNodes']);
        newData.forEach(element => {
          nodeNames.push(element['label']);
          return element['label'];
        });
      }
      return nodeNames;
    }));
  }
}
