import AsyncStorage from '@react-native-async-storage/async-storage';
import { RepoStateType } from '../../atom/contents';

/**
 * #######################
 * # Async Storage Utils
 * #######################
 */

//기본 키, 밸류 저장
export const asyncStorageStoreData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    // saving error
    return false;
  }
};

// Array 데이터 저장
export const asyncStorageStoreArrayData = async (
  key: string,
  value: RepoState,
) => {
  try {
    const currentData = await asyncStorageGetData(key);

    if (currentData !== null) {
      const resultArray = JSON.parse(currentData);
      resultArray.push(value);

      await asyncStorageStoreData(key, JSON.stringify(resultArray));
    } else {
      const newArray = [];
      newArray.push(value);
      await asyncStorageStoreData(key, JSON.stringify(newArray));
    }
  } catch (e) {
    // error
  }
};

// Array에서 아이템 삭제하기
export const asyncStorageRemoveItemFromArray = async (
  key: string,
  value: string,
) => {
  try {
    const currentData = await asyncStorageGetData(key);
    const currentDataToArray = JSON.parse(currentData);
    if (currentDataToArray) {
      // key 파라미터에 해당하는 값을 가져와서 원하는 Value 삭제 진행
      const resultArray = currentDataToArray.filter(
        (item: RepoStateType) => item.repoName !== value,
      );
      // 필터링 완료 된 데이터 저장하기
      await asyncStorageStoreData(key, JSON.stringify(resultArray));
    } else {
      // 기존 데이터가 없으면 에러
    }
  } catch (e) {
    // error reading value
  }
};

// [ GET ] ================================
// 키로 데이터 가져오기
export const asyncStorageGetData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      // value previously stored
      return value;
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
  }
};
