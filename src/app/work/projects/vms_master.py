import json
import os

# =============================
#  VMS AUTOMATION MASTER PROGRAM
# =============================

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')


def welcome_page():
    clear_screen()
    print("=====================================")
    print("      VMS AUTOMATION MASTER TOOL      ")
    print("=====================================")
    print()
    print("Hello Mr. Eyas. Select an option below:\n")
    print("1. Build Sheet1 Data Structure")
    print("2. Load Legacy IDs (XLOOKUP)")
    print("3. Clean Raw VMS Export")
    print("4. Generate Daily/Weekly Reports")
    print("5. Merge Multiple Excel Files")
    print("6. Exit Program")
    print()


def main():
    while True:
        welcome_page()
        choice = input("Enter your choice: ")

        if choice == "1":
            print("\n[Running] Build Sheet1 Data Structure...")
            # build_structure()

        elif choice == "2":
            print("\n[Running] Load Legacy IDs...")
            # load_legacy_ids()

        elif choice == "3":
            print("\n[Running] Cleaning Raw VMS Export...")
            # clean_data()

        elif choice == "4":
            print("\n[Running] Generating Reports...")
            # generate_report()

        elif choice == "5":
            print("\n[Running] Merging Excel Files...")
            # merge_files()

        elif choice == "6":
            print("\nExiting program. Goodbye, Mr. Eyas.")
            break

        else:
            print("\nInvalid option. Please try again.")

        input("\nPress Enter to return to the main menu...")


if __name__ == "__main__":
    main()
