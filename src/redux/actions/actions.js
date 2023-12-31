// import axios from 'axios';

// Define action types
// import GetLocation from 'react-native-get-location';

// export const getCoordinatesForFirstLoadMap = () => {
//   try {
//     return async dispatch => {
//       await GetLocation.getCurrentPosition({
//         enableHighAccuracy: true,
//         timeout: 15000,
//       })
//         .then(location => {
//           let set_coord = [location.longitude, location.latitude];

//           dispatch({
//             type: 'GET_COORDINATES_FOR_FIRST_LOAD_MAP',
//             payload: {
//               map_coordinates: set_coord,
//               user_coordinates: set_coord,
//               first_point_coordinates: set_coord,
//               mapReady: true,
//             },
//           });
//         })
//         .catch(error => {
//           const {code, message} = error;
//           console.warn(code, message, 'useEffect ERROR');
//         });
//     };
//   } catch (error) {}
// };

// export const searchFromAddressList = address => {
//   try {
//     return async dispatch => {
//       let url = `https://photon.komoot.io/api/?lang=en&q=${address}`;

//       console.log(url, 'search ADDRESS FROM');

//       fetch(url)
//         .then(resp => {
//           return resp.json();
//         })
//         .then(resp => {
//           let response = resp.features;
//           let result_resp = [];

//           for (const responseKey in response) {
//             if (response[responseKey].properties.countrycode == 'AM') {
//               result_resp.push(response[responseKey]);
//             }
//           }

//           dispatch({
//             type: 'SEARCH_FROM_ADDRESS_LIST',
//             payload: result_resp,
//           });
//           console.log(resp, 'SEARCH_FROM_ADDRESS_LIST');
//         })
//         .catch(err => console.error(err));
//     };
//   } catch (error) {}
// };

// export const editFromInputValue = from_data => dispatch => {
//   console.log(from_data, 'EDIT_FROM_INPUT_VALUE ACTIONS');

//   dispatch({
//     type: 'EDIT_FROM_INPUT_VALUE',
//     payload: from_data,
//   });
// };

// export const setFromCoordinatesAfterClickToAddressInSearchResult =
//   coordinates => dispatch => {
//     console.log(
//       coordinates,
//       'setFromCoordinatesAfterClickToAddressInSearchResult ACTIONS',
//     );

//     dispatch({
//       type: 'SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT',
//       payload: coordinates,
//     });
//   };

// export const replaceFromAddressNameWithReserveFromAddressName =
//   () => dispatch => {
//     dispatch({
//       type: 'REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME',
//       payload: null,
//     });
//   };

// export const setFromDataCoordinate = from_data => dispatch => {
//   console.log(from_data, 'setFromDataCoordinate ACTIONS');

//   dispatch({
//     type: 'SET_FROM_COORDINATE_AND_NAME',
//     payload: from_data,
//   });
// };

// export const setFromDefined = defined => dispatch => {
//   console.log(defined, 'setFromDefined ACTIONS');

//   dispatch({
//     type: 'SET_FROM_DEFINED',
//     payload: defined,
//   });
// };

export const openTouchId = () => dispatch => {
  dispatch({
    type: 'OPEN_TOUCH_ID',
    payload: null,
  });
};

export const closeTouchId = () => dispatch => {
  dispatch({
    type: 'CLOSE_TOUCH_ID',
    payload: null,
  });
};

export const stateForPin = name => dispatch => {
  dispatch({
    type: 'STATE_FOR_PIN',
    payload: name,
  });
};

export const openDeletePopup = () => dispatch => {
  dispatch({
    type: 'OPEN_DELETE_POPUP',
    payload: null,
  });
};

export const closeDeletePopup = () => dispatch => {
  dispatch({
    type: 'CLOSE_DELETE_POPUP',
    payload: null,
  });
};

export const openCloseAccountPopup = () => dispatch => {
  dispatch({
    type: 'OPEN_CLOSE_POPUP',
    payload: null,
  });
};

export const closeCloseAccountPopup = () => dispatch => {
  dispatch({
    type: 'CLOSE_CLOSE_POPUP',
    payload: null,
  });
};

export const openAddPopup = () => dispatch => {
  dispatch({
    type: 'OPEN_ADD_POPUP',
    payload: null,
  });
};

export const closeAddPopup = () => dispatch => {
  dispatch({
    type: 'CLOSE_ADD_POPUP',
    payload: null,
  });
};

export const getImageData = res => dispatch => {
  dispatch({
    type: 'GET_IMAGE_DATA',
    payload: res,
  });
};

export const getStoryImageData = res => dispatch => {
  dispatch({
    type: 'GET_STORY_IMAGE_DATA',
    payload: res,
  });
};
