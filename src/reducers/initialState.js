export const state =  {
    gMapsDataState : {loaded: false, data: null},
    formDataState: {loaded: false, data: {foodValue: null, sportValue: {baseball: false}, whoValue: null}},
    playedGameDataState: {loaded: false}, 
    gMapsDecodeDataState: {loaded: false, data: null},
    s3DataState : {loaded: false, data: [
        {
          name: 'Visitor',
          value: 400
        }, {
          name: 'Friend',
          value: 300
        }
      ]}
}

