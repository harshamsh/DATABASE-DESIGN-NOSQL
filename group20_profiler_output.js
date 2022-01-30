[
    {
      op: 'query',
      ns: 'AirlineDetails.system.profile',
      command: {
        find: 'system.profile',
        filter: { op: { '$eq': 'query' } },
        sort: { millis: -1 },
        projection: { command: 1, millis: 1 },
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      keysExamined: 0,
      docsExamined: 0,
      hasSortStage: true,
      cursorExhausted: true,
      numYield: 0,
      nreturned: 0,
      queryHash: '64B57D23',
      planCacheKey: '8B6F811B',
      locks: {
        Global: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      responseLength: 118,
      protocol: 'op_msg',
      millis: 0,
      planSummary: 'COLLSCAN',
      execStats: {
        stage: 'SORT',
        nReturned: 0,
        executionTimeMillisEstimate: 0,
        works: 3,
        advanced: 0,
        needTime: 2,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        sortPattern: { millis: -1 },
        memLimit: 104857600,
        type: 'simple',
        totalDataSizeSorted: 0,
        usedDisk: false,
        inputStage: {
          stage: 'PROJECTION_SIMPLE',
          nReturned: 0,
          executionTimeMillisEstimate: 0,
          works: 2,
          advanced: 0,
          needTime: 1,
          needYield: 0,
          saveState: 0,
          restoreState: 0,
          isEOF: 1,
          transformBy: {},
          inputStage: {
            stage: 'COLLSCAN',
            filter: { op: { '$eq': 'query' } },
            nReturned: 0,
            executionTimeMillisEstimate: 0,
            works: 2,
            advanced: 0,
            needTime: 1,
            needYield: 0,
            saveState: 0,
            restoreState: 0,
            isEOF: 1,
            direction: 'forward',
            docsExamined: 0
          }
        }
      },
      ts: ISODate("2021-12-23T14:31:50.702Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        createIndexes: 'pilots',
        indexes: [ { key: { id: 1 }, name: 'id_1' } ],
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ParallelBatchWriterMode: { acquireCount: { r: Long("3") } },
        ReplicationStateTransition: { acquireCount: { w: Long("4") } },
        Global: { acquireCount: { r: Long("2"), w: Long("2") } },
        Database: { acquireCount: { r: Long("2"), w: Long("1") } },
        Collection: { acquireCount: { r: Long("2"), W: Long("1") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: { acquireCount: Long("2"), timeAcquiringMicros: Long("2") },
      responseLength: 114,
      protocol: 'op_msg',
      millis: 17,
      ts: ISODate("2021-12-23T14:32:18.670Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("3") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: {},
      readConcern: { provenance: 'implicitDefault' },
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 42,
      ts: ISODate("2021-12-23T14:32:26.798Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        dropIndexes: 'pilots',
        index: 'id_',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ParallelBatchWriterMode: { acquireCount: { r: Long("2") } },
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { w: Long("2") } },
        Database: { acquireCount: { w: Long("2") } },
        Collection: { acquireCount: { w: Long("1"), W: Long("1") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: { acquireCount: Long("2"), timeAcquiringMicros: Long("3") },
      ok: 0,
      errMsg: 'index not found with name [id_]',
      errName: 'IndexNotFound',
      errCode: 27,
      responseLength: 120,
      protocol: 'op_msg',
      millis: 0,
      ts: ISODate("2021-12-23T14:32:53.696Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        dropIndexes: 'pilots',
        index: 'id_1',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ParallelBatchWriterMode: { acquireCount: { r: Long("2") } },
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { w: Long("2") } },
        Database: { acquireCount: { w: Long("2") } },
        Collection: { acquireCount: { w: Long("1"), W: Long("1") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: { acquireCount: Long("2"), timeAcquiringMicros: Long("3") },
      responseLength: 55,
      protocol: 'op_msg',
      millis: 0,
      ts: ISODate("2021-12-23T14:33:02.195Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T14:33:05.918Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("3") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: {},
      readConcern: { provenance: 'implicitDefault' },
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 42,
      ts: ISODate("2021-12-23T14:52:03.549Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T14:54:34.658Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        listIndexes: 'pilots',
        cursor: {},
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      responseLength: 159,
      protocol: 'op_msg',
      millis: 0,
      ts: ISODate("2021-12-23T14:54:59.897Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("3") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: {},
      readConcern: { provenance: 'implicitDefault' },
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 45,
      ts: ISODate("2021-12-23T14:55:06.970Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        createIndexes: 'pilots',
        indexes: [ { key: { id: 1 }, name: 'id_1' } ],
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ParallelBatchWriterMode: { acquireCount: { r: Long("3") } },
        ReplicationStateTransition: { acquireCount: { w: Long("4") } },
        Global: { acquireCount: { r: Long("2"), w: Long("2") } },
        Database: { acquireCount: { r: Long("2"), w: Long("1") } },
        Collection: { acquireCount: { r: Long("2"), W: Long("1") } },
        Mutex: { acquireCount: { r: Long("3") } }
      },
      flowControl: { acquireCount: Long("2"), timeAcquiringMicros: Long("1") },
      responseLength: 114,
      protocol: 'op_msg',
      millis: 17,
      ts: ISODate("2021-12-23T14:57:31.527Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        explain: { find: 'pilots', filter: { '$where': 'this.id' } },
        verbosity: 'executionStats',
        lsid: { id: UUID("ac4bda4e-a88a-43d9-a151-902fd7f9c39c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        Global: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      responseLength: 1381,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T14:57:55.030Z"),
      client: '127.0.0.1',
      appName: 'mongosh 1.1.7',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("7969f2ad-91f6-4e7d-a2e5-c2ceae6b7fcc") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: { data: { bytesRead: Long("52") } },
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 5,
      ts: ISODate("2021-12-23T15:06:37.454Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("24f15f3b-4301-4119-b0c0-435e6e524f01") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.457Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        collStats: 'pilots',
        lsid: { id: UUID("68ceea1e-871d-44d3-b9fe-856257e06e19") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: { data: { bytesRead: Long("52") } },
      responseLength: 36418,
      protocol: 'op_msg',
      millis: 5,
      ts: ISODate("2021-12-23T15:06:37.477Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("0626c565-b8e7-492e-895f-6fe43b4d7ed7") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.488Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("52180b7c-92dc-4f9f-866d-0688858511dd") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.501Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.flights',
      command: {
        collStats: 'flights',
        lsid: { id: UUID("a9e341a9-17bf-409f-afa4-fd62825b9c04") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24375,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.514Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.flights',
      command: {
        collStats: 'flights',
        lsid: { id: UUID("3b1d9cd6-e72a-464b-bf94-5a16d9d2f4c2") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24375,
      protocol: 'op_msg',
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T15:06:37.526Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    }
  ]
  [
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("46ca3280-37dd-44be-a560-99f0921f94e3") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 2,
      ts: ISODate("2021-12-23T15:06:37.541Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("e299bc96-711d-4960-b253-a4d10813fdb9") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T15:06:37.543Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        collStats: 'pilots',
        lsid: { id: UUID("52180b7c-92dc-4f9f-866d-0688858511dd") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36418,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.558Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("05507a9c-11b2-4176-a03a-bc63656d8bbc") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.559Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("17848f09-7289-4a4b-972c-4d43519be8be") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.585Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.flights',
      command: {
        collStats: 'flights',
        lsid: { id: UUID("7a15194e-e2b0-46ba-b787-58a0e1d4faea") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24375,
      protocol: 'op_msg',
      millis: 2,
      ts: ISODate("2021-12-23T15:06:37.585Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("ec1bf85b-a5aa-459f-9ce6-0896f2c9716e") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.607Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("d65f2a70-280b-44a1-af08-f98ff8238595") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 5,
      ts: ISODate("2021-12-23T15:06:37.610Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("ffda9bec-70e7-4bec-877c-59a08e51717c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.627Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.planes',
      command: {
        collStats: 'planes',
        lsid: { id: UUID("51c90c7b-860f-49f9-b3ea-9ba929a2b74e") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.628Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("7b3c48fe-0ab3-4a9d-bb80-366b4bb4de01") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.650Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.planes',
      command: {
        collStats: 'planes',
        lsid: { id: UUID("9b59a7dd-5570-4240-895c-f05b5a4ab6e0") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.651Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        collStats: 'pilots',
        lsid: { id: UUID("9b59a7dd-5570-4240-895c-f05b5a4ab6e0") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36418,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T15:06:37.670Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("2233456f-2e24-4059-9c52-e8997996f698") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 2,
      ts: ISODate("2021-12-23T15:06:37.671Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("6e175f41-f23b-4bf6-a5fe-f3a45f58c07c") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T15:06:37.672Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.flights',
      command: {
        collStats: 'flights',
        lsid: { id: UUID("d39bcc72-062e-45a8-84ec-c498df10a1ed") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24375,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.693Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.journeybookings',
      command: {
        collStats: 'journeybookings',
        lsid: { id: UUID("9326a7cd-b263-4509-815a-00a18597ca84") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36429,
      protocol: 'op_msg',
      millis: 4,
      ts: ISODate("2021-12-23T15:06:37.696Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.airports',
      command: {
        collStats: 'airports',
        lsid: { id: UUID("54db5a21-26e7-4773-8396-8ca70f555cd9") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.696Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.planes',
      command: {
        collStats: 'planes',
        lsid: { id: UUID("0ec1a2a6-70a2-449f-ae18-cd7984c7e16d") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 24376,
      protocol: 'op_msg',
      millis: 2,
      ts: ISODate("2021-12-23T15:06:37.721Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    },
    {
      op: 'command',
      ns: 'AirlineDetails.pilots',
      command: {
        collStats: 'pilots',
        lsid: { id: UUID("3383a070-6a2c-43dc-930c-343025936fc3") },
        '$db': 'AirlineDetails'
      },
      numYield: 0,
      locks: {
        ReplicationStateTransition: { acquireCount: { w: Long("2") } },
        Global: { acquireCount: { r: Long("2") } },
        Database: { acquireCount: { r: Long("1") } },
        Collection: { acquireCount: { r: Long("1") } },
        Mutex: { acquireCount: { r: Long("1") } }
      },
      flowControl: {},
      storage: {},
      responseLength: 36418,
      protocol: 'op_msg',
      millis: 3,
      ts: ISODate("2021-12-23T15:06:37.721Z"),
      client: '127.0.0.1',
      appName: 'MongoDB Compass',
      allUsers: [],
      user: ''
    }
  ]