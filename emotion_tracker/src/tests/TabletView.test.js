import React from "react";
import {render, fireEvent, cleanup, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import TabletView from "../views/TabletView";
import fetchMock from 'jest-fetch-mock';

afterEach(cleanup);

describe('TabletView', () => {
    beforeAll(() => {
        fetchMock.enableMocks();
    });

    afterAll(() => {
        fetchMock.disableMocks();
    });

    it('it renders correctly', () => {
        const {getByRole} = render(<TabletView />);
        expect(getByRole('button', {name: "Submit"})).toBeInTheDocument();
        expect(getByRole('textbox', {name: "Password"})).toBeInTheDocument();
    });

    it('it updates state correctly', async () => {
        const {getByRole} = render(<TabletView />);
        const passInput = getByRole("textbox", {name: "Password"});

        expect(getByRole('button', {name: "Submit"})).toBeInTheDocument();
        fireEvent.change(getByRole('textbox', {name: "Password"}), {target: {value: 'kissakoira'}});
        fireEvent.click(getByRole('button', {name: "Submit"}));
        await waitFor(() => expect(getByRole('textbox', {name: "Password"})).toHaveValue('kissakoira'), {timeout: 2000});
        expect(getByRole('button', {name: "Submit"})).toBeInTheDocument();
    });
});