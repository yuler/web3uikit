import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './PopoverElement.stories';
import 'jest-styled-components';

const { Default } = composeStories(stories);
const testClickEvent = jest.fn();

describe('Default', () => {
    let container: HTMLDivElement;
    const dropdownElementId = 'test-dropdown-element';
    const dropdownElementClickId = 'test-dropdown-element-click';

    beforeEach(() => {
        container = document.createElement('div');
        render(<Default onClick={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should fire event when clicked', async () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementClickId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Custom', () => {
    let container: HTMLDivElement;
    const dropdownElementId = 'test-dropdown-element';
    const dropdownElementClickId = 'test-dropdown-element-click';
    const dropdownElementTextId = 'test-dropdown-element-text';
    const height = 50;
    const width = 100;
    const buttonText = 'Local Devchain Server';

    beforeEach(() => {
        container = document.createElement('div');
        render(
            <Default
                height={height}
                width={width}
                text={buttonText}
                textSize={20}
                iconSize={30}
                backgroundColor={'transparent'}
                onClick={testClickEvent}
            />,
            {
                container: document.body.appendChild(container),
            },
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should fire event when clicked', async () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementClickId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    it(`should have set the width to ${width}`, () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementClickId}"]`,
        );
        expect(element?.getAttribute('width')).toBe(`${width}`);
    });

    it(`should have set the height to ${height}`, () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementClickId}"]`,
        );
        expect(element?.getAttribute('height')).toBe(`${height}`);
    });

    it('should have set the text', () => {
        const element = container.querySelector(
            `[data-testid="${dropdownElementTextId}"]`,
        );
        expect(element?.textContent).toBe(buttonText);
    });
});
