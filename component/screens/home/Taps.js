import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Button from "../../other/button/Button";
import { verticalScale } from '../../other/scaling';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCategoryId, updateSelectedCategoryId } from '../../../redux/reducers/Category'; // Assuming this is your action
import { changeSelectedDonationId } from '../../../redux/reducers/Donation';

export const Taps = () => {
    const category = useSelector(state => state.category);
    const donation = useSelector(state=>state.donation)
    const dispatch = useDispatch();
    const categories = category.category;

    useEffect(() =>{
        dispatch(resetSelectedCategoryId(1))
    },[])

    return (
        <View style={{ marginTop: verticalScale(20) }}>
            <TapButton categories={categories} dispatch={dispatch} />
        </View>
    );
};

const TapButton = ({ categories, dispatch }) => {
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
                <View key={item.categoryId}>
                    <Button
                        tabId={item.categoryId}
                        onPress={() => {
                            console.log("d1")
                            dispatch(resetSelectedCategoryId(item.categoryId))
                            console.log("d2")

                            dispatch(changeSelectedDonationId(item.categoryId))
                            console.log("d3")

                        }}
                        title={item.name}
                    />
                </View>
            )}
            keyExtractor={(item) => item.categoryId.toString()}
        />
    );
};




